import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoList from "../../components/PhotoList";
import { useDispatch, useSelector } from "react-redux";
import { removePhoto } from "../../photoSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const photos = useSelector((state) => state.photos);

  const handleEditPhoto = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`;
    navigate(editPhotoUrl);
  };

  const handleRemovePhoto = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };
  return (
    <div className="main-page">
      <Banner title="Your awesome photos ✨" backgroundUrl={Images.THREE_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handleEditPhoto}
          onPhotoRemoveClick={handleRemovePhoto}
        />
      </Container>
    </div>
  );
};

export default MainPage;
