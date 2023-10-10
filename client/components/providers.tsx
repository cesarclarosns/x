"use client";

import { CookiesProvider } from "react-cookie";
import PersistAuth from "./auth/persist-auth";
import RouteGuard from "./auth/route-guard";
import Loading from "./loading";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CookiesProvider defaultSetOptions={{ path: "/" }}>
			<PersistAuth>
				<RouteGuard>{children}</RouteGuard>
			</PersistAuth>
		</CookiesProvider>
	);
}
