import React from 'react'

interface InstagramCardProps {
  name: string
  username: string
  bio: string
  location?: string
  posts: number
  followers: number
  following: number
  profileImage: string
  instagramLink?: string
}

const InstagramCard: React.FC<InstagramCardProps> = ({
  name,
  bio,
location,
  posts,
  followers,
  following,
  profileImage,
  instagramLink,
}) => {
  return (
    <div className="border border-gray-200 rounded-3xl p-6 md:p-8 bg-white w-full max-w-[450px] min-h-[300px] flex flex-col shadow-lg mx-auto">
      {/* Header Section - Profile and Stats in One Row */}
      <div className="flex items-start gap-4 md:gap-6 mb-6">
        <img
          src={profileImage}
          alt={name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          {/* Stats Section */}
          <div className="flex justify-between md:justify-start md:gap-14 pt-2 md:pt-4">
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-lg md:text-xl">{posts}</p>
              <p className="text-black text-xs md:text-sm">Posts</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-lg md:text-xl">{followers.toLocaleString()}</p>
              <p className="text-black text-xs md:text-sm">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-lg md:text-xl">{following}</p>
              <p className="text-black text-xs md:text-sm">Following</p>
            </div>
          </div>
        </div>
      </div>

      {/* Name Section */}
      <div className="mb-4">
        <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{location}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a 
          href={instagramLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition text-center text-base"
        >
          Follow
        </a>
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg transition text-base">
          Message
        </button>
      </div>
    </div>
  )
}

export default InstagramCard
