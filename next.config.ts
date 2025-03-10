import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    output: 'export',


    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    skipTrailingSlashRedirect: true,

    basePath: '',
    assetPrefix: '',
};

export default nextConfig;
