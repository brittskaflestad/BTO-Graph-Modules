export interface IFilesSharedWithMeWebpartProps {
  description: string;
  files: Array<{name, url, sharedBy, sharedDate}>;
}
