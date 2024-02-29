import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Orders.css'

const Orders: React.FC = () => {
  return (
    <IonPage>
      <div className="my-orders-header">
        <div className="content">
            <h1>Мои Заказы</h1>
        </div>
      </div>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Мои заказы2</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Orders;
