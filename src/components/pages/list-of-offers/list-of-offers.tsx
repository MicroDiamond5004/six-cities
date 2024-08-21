import { Offer } from '../../../types/type-offers';
import TabOfferScreen from '../tab-offer-page/tab-offer-page';
import React, { useEffect, useState } from 'react';

type OffersProps = {
  offers: Offer[];
  handlerMouseOnOffer: (offer: Offer) => void | null;
}

function ListOfOffers(props: OffersProps): JSX.Element {
  const {offers, handlerMouseOnOffer} = props;
  const [currnetOffer, setOffer] = useState(offers[0]);
  useEffect(() => {
    handlerMouseOnOffer(currnetOffer);
  }, [currnetOffer, handlerMouseOnOffer]);
  const tabsOffers: JSX.Element[] = offers.map((offer) => (<TabOfferScreen key={offer.id} offer={offer} onChangeOffer={() => setOffer(offer)}/>));
  return(
    <React.Fragment>
      {tabsOffers.map((el) => el)}
    </React.Fragment>
  );
}

export default ListOfOffers;
