import React from 'react';

interface MinhaTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  onClick?: () => void;
}

const MinhaTooltip: React.FC<MinhaTooltipProps> = ({ children, content, onClick }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip-content">
        {content}
      </div>
    </div>
  );
};

export default MinhaTooltip;
