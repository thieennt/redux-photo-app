import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhotos, updatePhoto } from "../../photoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { randomNumber } from "../../../../utils/common";

const AddEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  console.log("photoId", photoId);

  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );

  const initialValues = isAddMode
    ? { title: "", categoryId: null, photo: "" }
    : editedPhoto;

  const handleSubmit = async (values) => {
    console.log("Form Submit: ", values);

    setTimeout(() => {
      if (isAddMode) {
        const newPhoto = {
          ...values,
          id: randomNumber(1000, 9999),
        };
        const actions = addPhotos(newPhoto);
        dispatch(actions);
      } else {
        const action = updatePhoto(values);
        dispatch(action);
      }

      navigate("/photos");
    }, 2000);
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo ✨" />

      <div className="photo-edit__form">
        <PhotoForm
          initialValues={initialValues}
          isAddMode={isAddMode}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
