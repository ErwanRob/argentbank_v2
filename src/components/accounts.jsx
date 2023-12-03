import accountData from "../data/dataAccounts.json";
import AccountCard from "./accountCard";

function Services() {
  return (
    <div>
      {accountData.map((account) => (
        <AccountCard
          key={account.id}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </div>
  );
}

export default Services;
