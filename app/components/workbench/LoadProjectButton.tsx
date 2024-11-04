import type { FC } from 'react';
import { workbenchStore } from '~/lib/stores/workbench';
import { toast } from 'sonner';

export const LoadProjectButton: FC = () => {
  const handleLoadProject = async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      await workbenchStore.loadLocalProject(directoryHandle);
      toast.success('Project loaded successfully');
    } catch (error) {
      console.error('Error loading project:', error);
      toast.error('Failed to load project');
    }
  };

  return (
    <button
      className="mr-1 text-sm flex items-center px-3 py-1.5 rounded hover:bg-bolt-elements-item-backgroundActive"
      onClick={handleLoadProject}
    >
      <div className="i-ph:folder-open mr-2" />
      Load Project
    </button>
  );
};