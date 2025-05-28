type Props = {
  isLoading?: boolean;
  onLoadingChange?: (loading: boolean) => void;
  redirectUrl?: string;
};

export function OAuthSignIn(props: Props) {
  return (
    <div className="w-full">
      <div className="relative mb-4">
        <div className="absolute inset-0"></div>
      </div>
    </div>
  );
}
