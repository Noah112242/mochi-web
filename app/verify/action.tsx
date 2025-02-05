import { Button } from '~components/Button'

interface Props {
  handleVerify: () => void
  loading: boolean
}

export const VerifyAction = (props: Props) => (
  <div className="w-full max-w-xs px-6 py-8 mx-auto sm:max-w-7xl">
    <h3 className="mb-4 text-3xl font-black text-center uppercase md:text-4xl lg:text-5xl text-mochi-gradient">
      Verify your wallet
    </h3>
    <p className="max-w-sm mx-auto mb-6 font-medium text-center">
      Connect your wallet to verify and get full access to Mochi with more
      exclusive privileges.
    </p>
    <Button
      appearance="tertiary"
      onClick={props.handleVerify}
      className="mx-auto"
    >
      {props.loading ? (
        'Verifying...'
      ) : (
        <>
          <img src="/assets/metamask.svg" className="h-8 mr-2" alt="Metamask" />
          Verify
        </>
      )}
    </Button>
  </div>
)
