import { useEffect } from "react";

// Mounts an Elfsight app by ID. platform.js (index.html) picks up widgets present at
// load; after a client-side route change we ask it to scan again.
export default function ElfsightWidget({ id, className = "" }) {
	useEffect(() => {
		window.eapps?.initWidgetsFromBuffer?.();
	}, [id]);

	return <div className={`elfsight-app-${id} ${className}`} data-elfsight-app-lazy />;
}
