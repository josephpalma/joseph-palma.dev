import { React, useEffect } from 'react';
import useScriptParser from '../../hooks/useScriptParser';

const ExperienceInnerHtml = ({ outHtml, innerHtml = '' }) => {
  const script = useScriptParser(innerHtml, 25);

  useEffect(() => {
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = script;
    document.body.append(inlineScript);

    return inlineScript.remove();
  });

  return (
    <div id='more-content'>
      <div dangerouslySetInnerHTML={{ __html: outHtml }} />
    </div>
  );
};

export default ExperienceInnerHtml;
