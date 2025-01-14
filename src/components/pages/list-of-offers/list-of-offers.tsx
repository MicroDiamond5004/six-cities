import { changeOffer } from '../../../store/slices/main-offers-process/main-offers-process.slice';
import { Offer } from '../../../types/type-offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import TabOfferScreen from '../tab-offer-page/tab-offer-page';
import React, { useEffect, useState } from 'react';

type OffersProps = {
  offers: Offer[];
}

function ListOfOffers(props: OffersProps): JSX.Element {
  const {offers} = props;
  const dispatch = useAppDispatch();

  const tabsOffers: JSX.Element[] = offers.map((offer) => (<TabOfferScreen key={offer.id} offer={offer} onChangeOffer={() => dispatch(changeOffer(offer))}/>));
  return(
    <React.Fragment>
      {tabsOffers.map((el) => el)}
    </React.Fragment>
  );
}

export default ListOfOffers;
