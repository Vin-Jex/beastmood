import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface WithAuthProps {}

const withAuth = <P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const authToken = Cookies.get("jwt");

      if (!authToken) {
        router.push("/auth/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  // Set the display name for the WithAuth component
  WithAuth.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuth;
};

export default withAuth;
