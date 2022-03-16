import AboutCard from "../../../Atoms/AboutCard";
import Grid from "../../../Atoms/Grid";
import CartIcon from "../../../Atoms/Icons/CartIcon";
import DocumentIcon from "../../../Atoms/Icons/DocumentIcon";
import LockIcon from "../../../Atoms/Icons/LockIcon";
import DeliveryIcon from "../../../Atoms/Icons/DeliveryIcon";

const Advantages = () => {
  return (
    <Grid columns="1fr 1fr 1fr 1fr" padding="64px 53px" gap="0 28px">
      <AboutCard
        icon={<CartIcon />}
        title="Новая и почти новая одежда"
        description="Частные продавцы размещают новую одежду с бирками и почти новую одежду в отличном состоянии"
      />
      <AboutCard
        icon={<DocumentIcon />}
        title="Гарантия подлинности"
        description="Эксперты  проверяют подлинность товара. После проверки мы предоставляем  сертификат подлинности и качества"
      />
      <AboutCard
        icon={<LockIcon />}
        title="Безопасная сделка"
        description="После оплаты мы замораживаем деньги на счету покупателя. Деньги списываются после получения товара"
      />
      <AboutCard
        icon={<DeliveryIcon />}
        title="Доставка от двери до двери"
        description="Мы забираем товар, проверяем его и отправляем покупателю. Курьер доставляет посылку за 3 дня"
      />
    </Grid>
  );
};

export default Advantages;
