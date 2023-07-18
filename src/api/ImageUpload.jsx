// import { storage } from "../firbaseConfig";
import { storage } from "../firbaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { editProfile } from "./FirestoreAPI";

export const uploadImage = (
  file,
  id,
  setModalOpen,
  setProgress,
  setCurrentImage,
  // setAudioFiles // added to allow each user to upload songs to their individual audio player
) => {
  const profilePicsRef = ref(storage, `profileImages/${file.name}`);
  const uploadTask = uploadBytesResumable(profilePicsRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(progress);
    },
    (error) => {
      console.error(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((response) => {
        editProfile(id, { imageLink: response });
        setModalOpen(false);
        setCurrentImage({});
        setProgress(0);
      });
    }
  );
  // // new individual audio player start
  // // Upload the audio file
  // const audioRef = ref(storage, `audioFiles/${file.name}`);
  // const audioUploadTask = uploadBytesResumable(audioRef, file);

  // audioUploadTask.on(
  //   "state_changed",
  //   (snapshot) => {
  //     // Track progress of audio upload
  //     const progress = Math.round(
  //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //     );
  //     setProgress(progress);
  //   },
  //   (error) => {
  //     console.error(error);
  //   },
  //   () => {
  //     // Get the download URL of the uploaded audio file
  //     getDownloadURL(audioUploadTask.snapshot.ref).then((response) => {
  //       // Update the audio files state
  //       setAudioFiles((prevAudioFiles) => [
  //         ...prevAudioFiles,
  //         { name: file.name, url: response },
  //       ]);

  //       // Reset the state and close the modal
  //       setModalOpen(false);
  //       setCurrentImage({});
  //       setProgress(0);
  //     });
  //   }
  // );
  // // new individual audio player end
};

export const uploadPostImage = (file, setPostImage, setProgress) => {
  const postPicsRef = ref(storage, `postImages/${file.name}`);
  const uploadTask = uploadBytesResumable(postPicsRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );

      setProgress(progress);
    },
    (error) => {
      console.error(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((response) => {
        setPostImage(response);
      });
    }
  );
};

// export const uploadImage = (
//   file,
//   id,
//   setModalOpen,
//   setProgress,
//   setCurrentImage,
//   setAudioFiles
// ) => {
//   // Upload the image file (similar to existing code)
//   const profilePicsRef = ref(storage, `profileImages/${file.name}`);
//   const uploadTask = uploadBytesResumable(profilePicsRef, file);

//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const progress = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//       setProgress(progress);
//     },
//     (error) => {
//       console.error(error);
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((response) => {
//         editProfile(id, { imageLink: response });
//         setModalOpen(false);
//         setCurrentImage({});
//         setProgress(0);
//       });
//     }
//   );

//   // Upload the audio file
//   const audioRef = ref(storage, `audioFiles/${file.name}`);
//   const audioUploadTask = uploadBytesResumable(audioRef, file);

//   audioUploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       // Track progress of audio upload
//       const progress = Math.round(
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       );
//       setProgress(progress);
//     },
//     (error) => {
//       console.error(error);
//     },
//     () => {
//       // Get the download URL of the uploaded audio file
//       getDownloadURL(audioUploadTask.snapshot.ref).then((response) => {
//         // Update the audio files state
//         setAudioFiles((prevAudioFiles) => [
//           ...prevAudioFiles,
//           { name: file.name, url: response },
//         ]);

//         // Reset the state and close the modal
//         setModalOpen(false);
//         setCurrentImage({});
//         setProgress(0);
//       });
//     }
//   );
// };
