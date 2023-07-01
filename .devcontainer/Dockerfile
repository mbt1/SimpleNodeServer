FROM node:14

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1

RUN apt-get -y install git procps

# Install eslint
RUN npm i -g eslint

COPY package*.json ./
RUN npm install

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Set the default shell to bash
ENV SHELL /bin/bash
