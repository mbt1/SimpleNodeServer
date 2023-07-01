FROM node:14

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1

RUN apt-get install -y sudo

RUN apt-get -y install git procps

# Install eslint
RUN npm i -g eslint

COPY package*.json ./
RUN npm install

RUN curl -L -O https://artifacts.elastic.co/downloads/beats/elastic-agent/elastic-agent-8.8.2-linux-x86_64.tar.gz
RUN tar xzvf elastic-agent-8.8.2-linux-x86_64.tar.gz

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Set the default shell to bash
ENV SHELL /bin/bash
