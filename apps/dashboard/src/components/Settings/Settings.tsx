import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent, Position } from '@syncfusion/ej2-react-popups';
// import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const Settings = () => {
  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
      {/* <TooltipComponent content="Settings" position={'Top' as Position}>
        <button
          type="button"
          title="Settings"
          className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          style={{ backgroundColor: 'blue', borderRadius: '50%' }}
        >
          
        </button>
      </TooltipComponent> */}
      <Tooltip title="Settings" placement="bottom-end">
        <IconButton
          // className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
          style={{ backgroundColor: 'blue', color: 'white' }}
        >
          <FiSettings />
        </IconButton>
      </Tooltip>
    </div>
  );
};
