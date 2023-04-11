import { useEffect } from 'react';
import useSWR from 'swr';

const adminAddresses = {
  '0x05315c4ac56bc32111feb3f43ee961cdd0578c58dab71007f856e646fa01fa7e': true,
  '0x4f5e7c401d4a65fccf7a930c557c7b648bf3defe88b5d9d74fe2a3e589bbdc3b': true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? 'web3/accounts' : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      if (!account) {
        throw new Error(
          'Cannot retreive an account. Please refresh the browser.'
        );
      }

      return account;
    }
  );

  useEffect(() => {
    const mutator = (accounts) => mutate(accounts[0] ?? null);
    provider?.on('accountsChanged', mutator);

    return () => {
      provider?.removeListener('accountsChanged', mutator);
    };
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
