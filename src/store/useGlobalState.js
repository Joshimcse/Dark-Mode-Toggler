import { useReducer } from 'react';
import storage from 'local-storage-fallback';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        isDark: !state.isDark,
      };
    default: {
      return state;
    }
  }
};

const useGloablState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });

  return { state, dispatch };
};

export default useGloablState;
