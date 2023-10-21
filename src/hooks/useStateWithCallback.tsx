import { useState, useRef, useEffect, useCallback } from 'react';
export const useStateWithCallback = (intialState:Array<any>) => {
    const [state, setState] = useState<any>(intialState);
    const cbRef:any = useRef(null);

    const updateState = useCallback((newState:any, cb:any) => {
        console.log(cb, "cb");
        console.log(newState, "newstaset");
        cbRef.current = cb;

        setState((prev:any) =>
            typeof newState === 'function' ? newState(prev) : newState
        );
    }, []);

    console.log(cbRef, "cbref")
    console.log(state, "STETE")
    useEffect(() => {
        if (cbRef.current) {
            console.log(cbRef.current(state), "CURRRRRRRRRR")
            cbRef.current(state);
            cbRef.current = null;
            
        }
        console.log("BROTHER")

    }, [state]);

    return [state, updateState];
};