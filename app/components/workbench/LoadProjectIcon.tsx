import { type FC } from 'react';
import { workbenchStore } from '~/lib/stores/workbench';
import { toast } from 'sonner';
import { IconButton } from '~/components/ui/IconButton';

export const LoadProjectIcon: FC = () => {
  const handleLoadProject = async () => {
    try {
      const directoryHandle = await window.showDirectoryPicker();
      await workbenchStore.loadLocalProject(directoryHandle);
      toast.success('Project loaded successfully');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error loading project:', error);
        toast.error(error.message || 'Failed to load project');
      }
    }
  };

  return (
    <div className="absolute right-16 top-3 z-10">
      <IconButton
        icon="i-ph:folder-open"
        title="Load Project"
        onClick={handleLoadProject}
      />
    </div>
  );
};