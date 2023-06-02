import { useEffect, useState } from 'react';
import { eventEmitter } from '../lib/events';

export function useLoadingEvent(eventNames: Array<string | number>) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onChange = (value: boolean) => {
      setLoading(value);
    };

    for (let name of eventNames) {
      eventEmitter.on(name.toString(), onChange);
    }

    return () => {
      for (let name of eventNames) {
        eventEmitter.off(name.toString(), onChange);
      }
    };
  }, []);

  return loading;
}

export function useEvent(eventName: string, on?: (value?: any) => void, deps: any[] = []) {
  useEffect(() => {
    if (on) {
      eventEmitter.on(eventName, on);
    }

    return () => {
      if (on) {
        eventEmitter.off(eventName, on);
      }
    };
  }, deps);

  const emit = (value?: any) => {
    eventEmitter.emit(eventName, value);
  };

  return emit;
}
