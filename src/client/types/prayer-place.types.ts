export interface PrayerPlace {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  timings: {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
  distance?: number;
}

export interface PrayerPlaceFilters {
  radius: number;
  prayerTime?: string;
}