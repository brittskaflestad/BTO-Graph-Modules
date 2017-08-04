import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'filesSharedWithMeWebpartStrings';
import FilesSharedWithMeWebpart from './components/FilesSharedWithMeWebpart';
import { IFilesSharedWithMeWebpartProps } from './components/IFilesSharedWithMeWebpartProps';
import { IFilesSharedWithMeWebpartWebPartProps } from './IFilesSharedWithMeWebpartWebPartProps';



const appconfig = {
    clientID: "f776dc11-31ca-469d-b388-89113f1fabb0", // Azure AD Application ID    
    redirectUri: location.origin
};

const scopes = ["User.Read", "Files.Read"];

const defaultFiles = [{name:"Report1",url:"#", sharedBy:"Per Holmen", sharedDate: "23.07.2017"}, {name:"Report2",url:"#", sharedBy:"Gro Holmen", sharedDate: "12.06.2017"}, {name:"Report3",url:"#", sharedBy:"Trude Holmen", sharedDate: "04.01.2017"}];

/// <reference path="../../../node_modules/msal/out/msal.d.ts" />
//const tt = new Msal.UserAgentApplication(msalconfig.clientID, null, 
//  (errorDes, token, error, tokenType) => {});

export default class FilesSharedWithMeWebpartWebPart extends BaseClientSideWebPart<IFilesSharedWithMeWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IFilesSharedWithMeWebpartProps > = React.createElement(
      FilesSharedWithMeWebpart,
      {
        description: this.properties.description,
        files: defaultFiles
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
