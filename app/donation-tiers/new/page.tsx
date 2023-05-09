import NewDonationTier from "@/app/components/donation_tiers/new";
import { useWallet } from "@suiet/wallet-kit";

const NewDonationTierPage = () => {

  return (
    <div>
      <h1>New</h1>
      <NewDonationTier />
    </div>
  )
}

export default NewDonationTierPage;