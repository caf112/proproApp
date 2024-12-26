//認証は後回し

import * as React from 'react'

// これにCognitoの情報を入れればいいのか？
type AppProviderProps = {
    // children: React.ReactNode;
    // children?: React.ReactNode;
};

// export const AppProvider = ({children}: AppProviderProps) => {
export const AppProvider = () => {


  return (
    <div>
        {/* {children} */}
        provider
    </div>
  )
}
