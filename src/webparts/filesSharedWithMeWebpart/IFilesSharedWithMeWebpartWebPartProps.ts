export interface IFilesSharedWithMeWebpartWebPartProps {
  description: string;
  files: Array<{name, url, sharedBy, sharedDate}>;
}
