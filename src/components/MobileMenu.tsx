import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const MobileMenu = () => {
  return (
    <Menu as="div" className="relative lg:hidden">
      <MenuButton
        aria-label="Menu"
        className="flex items-center px-3 py-2 border rounded focus:outline-none data-[hover]:border-green data-[open]:border-green data-[open]:border-2 data-[focus]:outline-2 data-[focus]:outline-green"
      >
        <svg
          className="fill-current h-5 w-5"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Menu"
          aria-hidden="true"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 mt-2 p-1 origin-top-right rounded-xl border border-dark bg-white text-sm/6 text-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <a
            className="block data-[focus]:bg-green/50 data-[focus]:font-bold rounded-lg py-1.5 px-3"
            href="#!"
          >
            About
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block data-[focus]:bg-green/50 data-[focus]:font-bold rounded-lg py-1.5 px-3"
            href="#!"
          >
            Projects
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block data-[focus]:bg-green/50 data-[focus]:font-bold rounded-lg py-1.5 px-3"
            href="#!"
          >
            Technologies
          </a>
        </MenuItem>

        <MenuItem>
          <a
            className="block data-[focus]:bg-green/50 data-[focus]:font-bold rounded-lg py-1.5 px-3"
            href="#!"
          >
            Blog
          </a>
        </MenuItem>
        <MenuItem>
          <button className="w-full border border-dark mt-1.5 py-3 px-6 rounded-md data-[focus]:bg-green data-[focus]:font-medium transition-all">
            Join the Community
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default MobileMenu;