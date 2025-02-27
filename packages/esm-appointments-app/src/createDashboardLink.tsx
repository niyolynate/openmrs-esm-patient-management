import React from 'react';
import { SideNavLink } from '@carbon/react';
import { navigate } from '@openmrs/esm-framework';
import { spaBasePath } from './constants';

export interface DashboardLinkConfig {
  name: string;
  title: string;
  renderIcon?: React.ComponentType<any>;
}

export const createDashboardLink = (db: DashboardLinkConfig) => {
  const DashboardLink: React.FC = () => {
    return (
      <div key={db.name}>
        <SideNavLink
          renderIcon={db.renderIcon}
          href={`${spaBasePath}/${db.name}`}
          onClick={(e) => {
            e.preventDefault();
            navigate({ to: `${spaBasePath}/${db.name}` });
          }}>
          {db.title}
        </SideNavLink>
      </div>
    );
  };
  return DashboardLink;
};
