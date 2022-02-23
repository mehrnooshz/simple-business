import React from 'react';
import useDocumentTitle from 'hooks/useDocumentTitle';
import AppHeader from './appHeader';

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
}
const DefaultLayout = ({ title, children }: AppLayoutProps) => {
  const docTitle = title ? `${title} | DevOcean` : 'DevOcean';
  useDocumentTitle(docTitle);
  return (
    <div data-testid="app-layout" className="w-full text-gray-700">
      <AppHeader />
      {children}
    </div>
  );
};
export default DefaultLayout;
