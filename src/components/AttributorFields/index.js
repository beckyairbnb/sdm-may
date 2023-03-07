import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"

export default function Lead ({returnUrl}) {
  const intervalRef = useRef();
  const [attributorData, setAttributorData] = useState(undefined);

  useEffect(() => {

    if (typeof document !== "undefined") {
        if (document.FlareTrk) {
            setAttributorData(document.FlareTrk.getData())
        } else {
            intervalRef.current = setInterval(() => {
                if (document.FlareTrk && intervalRef.current) {
                    setAttributorData(document.FlareTrk.getData())
                    clearInterval(intervalRef.current);
                } else {
                    console.warn(`FlareTrk library not loaded, retrying in 100ms`);
                }
            }, 100);
        }
    }

    return () => {
        // clear interval on unmount
        clearInterval(intervalRef.current)
    };

  }, []);


  return (
    (attributorData !== undefined) && 
    <>
        <input type="hidden" name="retURL" value={returnUrl} />

        <input type="hidden" name="oid" value="00D8d000009pkmx"/>
        <input type="hidden" name="00N8d00000QN3Qa" value={attributorData?.drillData?.channel || ""} />
        <input type="hidden" name="00N8d00000QN3Qf" value={attributorData?.drillData?.drillDown1 || ""} />
        <input type="hidden" name="00N8d00000QN3Qk" value={attributorData?.drillData?.drillDown2 || ""} />
        <input type="hidden" name="00N8d00000QN3Qp" value={attributorData?.drillData?.drillDown3 || ""} />
        <input type="hidden" name="00N8d00000QN4dw" value={attributorData?.drillData?.drillDown4 || ""} />
        <input type="hidden" name="00N8d00000QN3Qu" value={attributorData?.landing_url || ""} />
        <input type="hidden" name="00N8d00000QN3Qu" value={attributorData?.landing_page_group || ""} />
    </>
  )
}

Lead.propTypes = {
  returnUrl: PropTypes.string.isRequired,
}