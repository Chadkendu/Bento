"use client";

import { useState } from "react";
import { deletePost } from "@/app/actions/blogActions";
import Button from "../ui/Button";
import { PostTypes } from "@/types/postTypes";
import Input from "../ui/Input";

const DeletePosts: React.FC<{ post: PostTypes }> = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button
        aria="delete post"
        onClick={handleDelete}
        text=<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
        action
      />

      {showModal && (
        <>
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div className="w-screen h-screen bg-black/40 absolute" />
            <div
              className="bg-white p-6 rounded shadow-lg z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <p>Are you sure you want to delete this post?</p>
              <div className="flex gap-3 mt-5">
                <form action={deletePost} onSubmit={closeModal}>
                  <Input type="hidden" name="postId" value={post.id} />
                  <Button aria="delete post" type="submit" text="Yes" />
                </form>
                <Button
                  aria="cance delete post"
                  onClick={closeModal}
                  text="No"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DeletePosts;
