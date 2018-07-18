export const CLOSE_FLASH = "CLOSE_FLASH";

export const CloseFlashAction = () => ({
  type: CLOSE_FLASH
});

export const SHOW_FLASH = "SHOW_FLASH";

export const ShowFlashAction = (message: string) => ({
  payload: message,
  type: SHOW_FLASH,
});
