import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";

function Navbar() {

  return (
    <>
      <div className="w-full py-4 flex items-center justify-between">
        <div className="right text-white -100 font-bold">
            <a href="/">
            <h1>The Heroes</h1>
            </a>
        </div>
        <div className="left">
          <div className="btn-group flex items-center gap-2">
            <Button
              className="source-code-btn flex items-center gap-2"
              onClick={() => {
                window.location.href = "https://github.com/radhaya9av/the-heroes";
              }}
            >
                <FaGithub /> Star
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;