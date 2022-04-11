import { useEffect } from "react";


// custom hook for handling click outside  - we can use it in any component/project
export function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
            console.log('event target', event.target);
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        // document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
        //   document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because the passed-in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }