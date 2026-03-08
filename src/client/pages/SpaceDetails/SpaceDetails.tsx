import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin, ShieldCheck, Users, Droplets, Maximize,
  Clock, Star, ExternalLink, Info,
  CheckCircle2, Camera, Plus, X, ChevronLeft, ChevronRight,
  UsersRound,
  Locate
} from 'lucide-react';

interface Mosque {
  id: number;
  name: string;
  location: string;
  lat: number;
  lng: number;
  crowdLevel: 'High' | 'Moderate' | 'Low';
  isVerified: boolean;
  placeType: "Mosque" | "Prayer Room";
  description: string;
  longDescription: string;
  wuduAvailable: boolean;
  gender: "Men Only" | "Women Only" | "Male / Female ( Both )";
  spaceSize: "Large" | "Small";
  prayers: {
    current: { name: string; time: string };
    next: { name: string; time: string };
  };
  mainImage: string;
  gallery: string[];
}

const allSpaces: Record<string, Mosque> = {
  "1": {
    id: 1,
    name: "Jamia Masjid Al-Falah",
    location: "Block 1, Malir, Karachi, Pakistan",
    lat: 24.9010,
    lng: 67.1950,
    crowdLevel: "Low",
    isVerified: true,
    placeType: "Mosque",
    description: "Al-Falah Mosque is a beautifully designed spiritual center located in the heart of Malir. It features a spacious main hall, excellent ventilation, and a serene atmosphere for daily prayers. The mosque also hosts community events and educational sessions for children.",
    longDescription: "Al-Falah Mosque is a beautifully designed spiritual center located in the heart of Malir. It features a spacious main hall, excellent ventilation, and a serene atmosphere for daily prayers. The mosque also hosts community events and educational sessions for children. It is a place of worship for Muslims and is open to all who wish to pray or seek spiritual guidance. The mosque is also a place of education and community gathering, and it is a place where people can come together to worship and learn about Islam. The mosque is also a place where people can come together to worship and learn about Islam.",
    wuduAvailable: true,
    gender: "Male / Female ( Both )",
    spaceSize: "Large",
    prayers: {
      current: { name: "Asr", time: "4:30 PM" },
      next: { name: "Maghrib", time: "6:45 PM" }
    },
    mainImage: "https://images.unsplash.com/photo-1590273089302-ebbc53986b6e?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9zcXVlfGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9zcXVlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9zcXVlfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1678316899460-42c35917db10?w=900&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9zcXVlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1572358899655-f63ece97bfa5?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1512970648279-ff3398568f77?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1581141444721-0e6f8fa8397e?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D"
    ]
  },
  "2": {
    id: 2,
    name: "Madina Mosque",
    location: "Gulshan-e-Iqbal, Block 13, Karachi, Pakistan",
    lat: 24.9050,
    lng: 67.1850,
    crowdLevel: "High",
    isVerified: false,
    placeType: "Mosque",
    description: "Madina Mosque is a well-known local mosque in Gulshan-e-Iqbal. It accommodates a large congregation during Friday prayers and provides separate prayer areas. The mosque is actively involved in welfare activities and Quran classes for youth.",
    longDescription: "Madina Mosque is a well-known local mosque in Gulshan-e-Iqbal. It accommodates a large congregation during Friday prayers and provides separate prayer areas. The mosque is actively involved in welfare activities and Quran classes for youth. It is a place of worship for Muslims and is open to all who wish to pray or seek spiritual guidance. The mosque is also a place of education and community gathering, and it is a place where people can come together to worship and learn about Islam. The mosque is also a place where people can come together to worship and learn about Islam.",
    wuduAvailable: true,
    gender: "Men Only",
    spaceSize: "Large",
    prayers: {
      current: { name: "Asr", time: "4:25 PM" },
      next: { name: "Maghrib", time: "6:40 PM" }
    },
    mainImage: "https://plus.unsplash.com/premium_photo-1670745800247-271e8977da41?w=900&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1554110838-816383ce7956?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1590075865003-e48277faa558?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1528862973381-9bc5ad6d4227?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vc3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1597734187998-e1931acfe2ed?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzamlkfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578895151671-7d2e2e89dcf7?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzamlkfGVufDB8fDB8fHww"
    ]
  },
  "3": {
    id: 3,
    name: "City Prayer Space (Mall)",
    location: "Lucky One Mall, University Road, Karachi, Pakistan",
    lat: 24.8980,
    lng: 67.1910,
    crowdLevel: "Moderate",
    isVerified: true,
    placeType: "Prayer Room",
    description: "A conveniently located prayer room inside Lucky One Mall. It offers a clean, air-conditioned environment for shoppers and visitors. Separate sections are available for men and women with easy access from the food court level.",
    longDescription: "A conveniently located prayer room inside Lucky One Mall. It offers a clean, air-conditioned environment for shoppers and visitors. Separate sections are available for men and women with easy access from the food court level. It is a place of worship for Muslims and is open to all who wish to pray or seek spiritual guidance. The mosque is also a place of education and community gathering, and it is a place where people can come together to worship and learn about Islam. The mosque is also a place where people can come together to worship and learn about Islam.",
    wuduAvailable: true,
    gender: "Male / Female ( Both )",
    spaceSize: "Small",
    prayers: {
      current: { name: "Asr", time: "4:30 PM" },
      next: { name: "Maghrib", time: "6:45 PM" }
    },
    mainImage: "https://plus.unsplash.com/premium_photo-1697730196206-7d8f455766bf?w=900&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFzamlkfGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1605976528013-638e49b6599f?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hc2ppZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hc2ppZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1676929358405-7b65c955630d?w=900&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hc2ppZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1604071505904-27bab0c476e3?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hc2ppZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1642841158930-2e297b277c80?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hc2ppZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1635016288720-c52507b9a717?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hc2ppZHxlbnwwfHwwfHx8MA%3D%3D"
    ]
  }
};

const SpaceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const space = allSpaces[id || ""];

  const [activeImage, setActiveImage] = useState(space?.mainImage || "");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Close preview with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!space) return <div className="p-20 text-center">Space not found</div>;

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${space.lat},${space.lng}`, '_blank');
  };

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${space.lat},${space.lng}&z=15&output=embed`;

  // Helper functions for gallery preview
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % space.gallery.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + space.gallery.length) % space.gallery.length);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-10 relative">

      {/* --- IMAGE PREVIEW LIGHTBOX --- */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300">
            <X size={30} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300"
          >
            <ChevronLeft size={30} />
          </button>

          <img
          loading='lazy'
            src={space.gallery[selectedImageIndex]}
            className="max-h-[85vh] max-w-[90vw] object-contain select-none animate-in zoom-in-95 duration-300"
            alt="Preview"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors duration-300"
          >
            <ChevronRight size={30} />
          </button>

          <div className="absolute bottom-4 text-white font-medium text-sm">
            {selectedImageIndex + 1} / {space.gallery.length}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {/* --- TOP SECTION: IMAGES & HEADER INFO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 overflow-hidden bg-gray-50">
              <img loading='lazy' src={activeImage} alt={space.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {space.gallery.slice(0, 5).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-lg border-2 transition-all overflow-hidden ${activeImage === img ? 'border-primary' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img loading='lazy' src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-bold uppercase border ${space.isVerified ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                {space.isVerified ? <CheckCircle2 size={12} /> : <Info size={12} />}
                {space.isVerified ? 'Verified Space' : 'Unverified'}
              </span>
              <span className="px-3 py-1 flex items-center gap-1 rounded-md bg-purple-50 text-purple-600 border border-purple-100 text-[11px] font-bold uppercase">
                <Locate size={12}/> {space.placeType}
              </span>
              <span className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase border flex items-center gap-1 ${space.crowdLevel === 'High' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
                <UsersRound size={12}/> Crowd: {space.crowdLevel}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-primary mb-2">{space.name}</h1>
            <p className="flex items-center gap-1.5 text-[#796657] font-medium text-base mb-6">
              <MapPin size={18} className="text-[#466849]" /> {space.location}
            </p>

            {/* Prayers */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-green-200 rounded-xl bg-green-50 text-center sm:text-left">
                <p className="text-[11px] orb font-bold text-[#537a5a] uppercase mb-1">Current Prayer</p>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <span className="font-bold orb text-[#466849]">{space.prayers.current.name}</span>
                  <span className="font-bold orb text-[#796657]">{space.prayers.current.time}</span>
                </div>
              </div>
              <div className="p-4 border border-green-200 rounded-xl bg-green-100 text-center sm:text-left">
                <p className="text-[11px] orb font-bold text-[#537a5a] uppercase mb-1">Up Next</p>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <span className="font-bold orb text-[#466849]">{space.prayers.next.name}</span>
                  <span className="font-bold orb text-[#796657]">{space.prayers.next.time}</span>
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <h1 className="text-xl font-bold text-primary mb-2">Space Description</h1>
              <p className="text-secondary text-base leading-normal">{space.description}</p>
            </div>

            {/* Icons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="flex flex-col items-center p-3 border border-green-200 rounded-xl bg-green-50 text-center">
                <Droplets className="text-[#466849] mb-1" size={20} />
                <span className="text-[11px] font-semibold text-gray-500 uppercase">{space.wuduAvailable ? 'Wudu Area - Available' : 'No Wudu Area'}</span>
              </div>
              <div className="flex flex-col items-center p-3 border border-blue-200 rounded-xl bg-blue-50 text-center">
                <Users className="text-[#466849] mb-1" size={20} />
                <span className="text-[11px] font-semibold text-gray-500 uppercase">{space.gender}</span>
              </div>
              <div className="flex flex-col items-center p-3 border border-orange-200 rounded-xl bg-orange-50 text-center">
                <Maximize className="text-[#466849] mb-1" size={20} />
                <span className="text-[11px] font-semibold text-gray-500 uppercase">{space.spaceSize} Space</span>
              </div>
            </div>

            <button
              onClick={openInGoogleMaps}
              className="w-full bg-[#466849] hover:bg-[#537a5a] text-white py-4 rounded-xl font-bold uppercase flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
            >
              View Location on Google Maps <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* --- DESCRIPTION & GOOGLE MAP --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 items-stretch">
          <div className="p-5 border border-green-300 rounded-2xl bg-white flex flex-col justify-center">
            <h3 className="text-xl font-bold orb text-[#466849] flex items-center gap-2 mb-4">
              <Info size={22} /> About this space
            </h3>
            <p className="text-gray-600 leading-normal font-medium">
              {space.longDescription}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 overflow-hidden h-[340px] relative">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={googleMapsEmbedUrl}
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* --- PHOTO GALLERY (6 IMAGES WITH PREVIEW) --- */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-primary orb uppercase flex items-center gap-2">
              <Camera size={22} /> Photo Gallery
            </h2>
            <div className="h-[1px] bg-green-100 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {space.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className="aspect-square rounded-xl border border-gray-200 overflow-hidden cursor-pointer group relative"
              >
                <img loading='lazy' src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  <Plus className="text-white drop-shadow-md" size={32} />
                  <span className="text-white text-xs font-bold uppercase tracking-wider orb">Click to Preview</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- REVIEWS SECTION --- */}
        <div className="border border-green-300 rounded-2xl p-8 bg-white">
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-[#1a2b1c] mb-1 orb">Visitors Reviews</h2>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <div className="flex text-yellow-400">
                {[...Array(3)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                {[...Array(2)].map((_, i) => <Star key={i} size={18} className="text-gray-300" />)}
              </div>
              <span className="text-sm font-medium text-gray-700">3.0 out of 5 based on 3 reviews</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 items-start border-t border-gray-100 pt-8">
              <div className="w-11 h-11 rounded-full bg-[#e9ecef] flex items-center justify-center text-gray-600 font-bold text-base flex-shrink-0">
                M
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900 text-base">Muhammad Annas Khan</h4>
                  <span className="w-fit bg-[#dcfce7] text-[#15803d] text-[11px] font-bold px-2 py-0.5 rounded-md uppercase">
                    Verified Space Addition
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(3)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                    {[...Array(2)].map((_, i) => <Star key={i} size={13} className="text-gray-200" />)}
                  </div>
                  <span className="text-sm text-gray-400 font-normal">December 30, 2025</span>
                </div>
                <p className="text-gray-700 text-sm leading-snug font-medium">
                  "The wudu area is exceptionally clean and the mosque is very peaceful for Dhuhr prayer."
                </p>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center gap-4">
            <p className="text-gray-500 font-medium">
              Please <Link to="/login" className="text-green-600 hover:underline">Log in</Link> or <Link to="/register" className="text-green-600 hover:underline">Register</Link> to submit a review.
            </p>
            <button className="flex items-center gap-2 bg-secondary hover:bg-primary text-white px-10 py-3 rounded-full font-bold uppercase text-xs transition-all duration-300 orb active:scale-95 shadow-sm">
              Add Review <Plus size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpaceDetails;