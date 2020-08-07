import React, { useEffect, useState, useRef } from 'react';

import images from '../Planet/planets';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...rest }): JSX.Element | null => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        const { default: namedImport } = await images['half'][name];
        ImportedIconRef.current = namedImport;
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of
        // simplicity
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

export default Icon;
