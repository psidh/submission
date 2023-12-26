'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ImageData from '@/interface/ImageData';

export default function Main(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [numOfCards, setNumOfCards] = useState<number>(6);
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const [selectedCard, setSelectedCard] = useState<ImageData | null>(null);
  const [newCard, setNewCard] = useState<{ title: string; content: string }>({
    title: '',
    content: '',
  });

  const handleCardClick = (): void => {
    setShowModal(true);
    setSelectedCard(null);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  // Generating the Cards initially

  const handleGenerateCards = (): void => {
    const randomImagePage = Math.floor(Math.random() * 10);
    fetch(`https://picsum.photos/v2/list?page=${randomImagePage}&limit=${numOfCards}`)
      .then((response) => response.json())
      .then((data: ImageData[]) => {
        setImageData(data);

        // handleAddCard for each generated card
        data.forEach((card) => {
          setNewCard({ title: card.author, content: card.url });
          handleAddCard();
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });

    handleModalClose();
  };

  // CREATE Operation
  const handleAddCard = (): void => {
    if (newCard.title && newCard.content) {
      // new object
      const newImageData: ImageData = {
        id: Date.now().toString(),
        author: 'new User',
        width: 0,
        height: 0,
        url: '',
        download_url: '',
        ...newCard,
      };

      // Updating the ImageData state
      setImageData([...imageData, newImageData]);
      setNewCard({ title: '', content: '' });
      handleModalClose();
    }
  };

  const handleReadCard = (card: ImageData): void => {
    setSelectedCard(card);
    setNewCard({ title: card.author, content: card.url });
    setShowModal(true);
  };

  // UPDATE Operation
  const handleEditCard = (): void => {
    if (selectedCard) {
      const updatedImageData = imageData.map((card) =>
        card.id === selectedCard.id
          ? { ...card, author: newCard.title, url: newCard.content }
          : card
      );
      setImageData(updatedImageData);
      setNewCard({ title: '', content: '' }); // Reset newCard state
      handleModalClose();
    }
  };

  const handleDeleteCard = (): void => {
    if (selectedCard) {
      const updatedImageData = imageData.filter(
        (card) => card.id !== selectedCard.id
      );
      setImageData(updatedImageData);
      setSelectedCard(null);
      handleModalClose();
    }
  };

  return (
    <>
      <section className="flex flex-col w-full">
        <Navbar />
        <div>
          <h1 className="text-3xl my-8 mx-8 font-semibold">My Projects</h1>

          {/* Card div , initial div for display of new project */}
          <div
            className="rounded-lg md:m-8 p-4 bg-white flex flex-col justify-center items-center mx-2 md:w-[34%] cursor-pointer"
            onClick={handleCardClick}
          >
            <img src="/imagecard.svg" alt="" className="" />
            <p className="my-2 text-xl font-semibold">Create a new project</p>
            <p className="mt-2 text-sm font-semibold">
              or try a <span className="text-orange-400">sample project</span>
            </p>
          </div>

          {/* Generated Cards */}
          <div className="flex flex-wrap justify-around">
            {imageData.map((image: ImageData) => (
              <div
                key={image.id}
                className="rounded-lg m-8 p-4 bg-white flex flex-col justify-center items-center mx-2 w-[90%] md:w-[34%]"
              >
                <img src={image.download_url} alt={image.author} className="" />
                <p className="my-2 text-md md:text-xl font-semibold">
                  {image.author}
                </p>
                <p className="my-2 text-sm md:text-xl font-semibold flex overflow">
                  {image.url}
                </p>
                <p className="my-2 text-sm font-semibold">
                  Dimensions: {image.width} x {image.height}
                </p>
                <button
                  onClick={() => handleReadCard(image)}
                  className="text-white px-8 py-1 rounded-md bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out mt-4 w-full"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* This is a pop-up triggered during editing of the card*/}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-lg w-96">
              {selectedCard ? (
                <>
                  <h2 className="text-xl font-semibold mb-4">Edit Card</h2>
                  <input
                    type="text"
                    placeholder="Title"
                    value={newCard.title}
                    onChange={(e) =>
                      setNewCard({ ...newCard, title: e.target.value })
                    }
                    className="border p-2 mb-4 w-full"
                  />
                  <textarea
                    placeholder="Content"
                    value={newCard.content}
                    onChange={(e) =>
                      setNewCard({ ...newCard, content: e.target.value })
                    }
                    className="border p-2 mb-4 w-full"
                  />
                  <div className="flex justify-between items-end">
                    <button
                      className="text-white px-8 py-1 rounded-md bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out"
                      onClick={handleEditCard}
                    >
                      Update
                    </button>

                    <button
                      className="px-8 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out "
                      onClick={handleDeleteCard}
                    >
                      Delete
                    </button>
                  </div>
                </>
              ) : (
                //This is a pop-up triggered during creation of the card
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    Select the number of cards:
                  </h2>
                  <input
                    aria-label="Number of cards"
                    type="number"
                    min="1"
                    value={numOfCards}
                    onChange={(e) =>
                      setNumOfCards(parseInt(e.target.value, 10))
                    }
                    className="border p-2 mb-4 w-full"
                  />
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                      onClick={handleGenerateCards}
                    >
                      Generate
                    </button>
                    <button
                      className="bg-gray-300 px-4 py-2 rounded"
                      onClick={handleModalClose}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
