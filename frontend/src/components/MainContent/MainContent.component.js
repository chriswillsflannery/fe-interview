import React from 'react';
import { translate } from '../../utils/translate/translate';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="MainContent">
      <h2>{translate('greeting')}</h2>
    </div>
  )
}

export default MainContent;