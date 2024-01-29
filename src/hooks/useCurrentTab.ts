import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useCurrentTab = () => {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState<string | undefined>('');
  const [fullPathArray, setFullPathArray] = useState<string[]>([]);

  useEffect(() => {
    const pathArray = pathname.split('/');
    setFullPathArray(pathArray);
    const tab = pathArray[pathArray.length - 2];
    setCurrentTab(tab);
  }, [pathname]);
  return { currentTab, fullPathArray };
};

export default useCurrentTab;
