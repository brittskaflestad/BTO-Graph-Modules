import * as React from 'react';
import styles from './FilesSharedWithMeWebpart.module.scss';
import { IFilesSharedWithMeWebpartProps } from './IFilesSharedWithMeWebpartProps';

export default class FilesSharedWithMeWebpart extends React.Component<IFilesSharedWithMeWebpartProps, void> {
  public render(): React.ReactElement<IFilesSharedWithMeWebpartProps> {

     var files = this.props.files.map(file =>{
        return( 
          <div className={styles.row} key={`${file.name}key`}>
            <div className={styles.cell}><a href={file.url}>{file.name}</a></div>
            <div className={styles.cell}>{file.sharedBy}</div>
            <div className={styles.cell}>{file.sharedDate}</div>
          </div>                 
        );
        }); 

    return (
      <div className={styles.filesSharedWithMeWebpart}>
        <div className={styles.container}>          
            <div className={styles.table}>
              <div className={styles.thead}>
                <header className={styles.cell}>File</header>
                <header className={styles.cell}>Shared by</header>
                <header className={styles.cell}>Shared by date</header>
              </div>
              {files}              
              </div>              
            </div>          
      </div>
    );
  }
}
