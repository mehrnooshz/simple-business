import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
  descriptionFirst: string;
  descriptionSecond: string;
}

const AddressContact: FunctionComponent<Props> = ({
  title,
  descriptionFirst,
  descriptionSecond,
}: Props) => {
  return (
    <div className="d-flex flex-col">
      <h3 className="title">{title}</h3>
      <p className="description">{descriptionFirst}</p>
      <p className="description">{descriptionSecond}</p>
    </div>
  );
};

export default AddressContact;
