export interface DesktopMenuType {
  openMenu: boolean;
  accountMenu: null | HTMLElement;
  isModalOpen: boolean;
  handleCloseMenu?: () => void;
  handleCloseModal: () => void;
  handleCloseBrowse?: () => void;
  isBrowseOpen: boolean;
  browseMenu: null | HTMLElement;
}
export interface MobileMenuType {
  openMenu: boolean;
  accountMenu: null | HTMLElement;
  handleOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
  isModalOpen: boolean;
  handleCloseMenu?: () => void;
  handleCloseModal: () => void;
  handleCloseBrowse?: () => void;
  isBrowseOpen: boolean;
  browseMenu: null | HTMLElement;
}
