# assigment-docker-js
# Khaalid245 Task Manager

This task manager provides users with an intuitive interface to create, track, and manage daily tasks effectively.

## Technologies

- **HTML, CSS & JavaScript:** Frontend development.
  
- **Docker:** Easy deployment and compatibility.

## Usage

- git clone https://github.com/Khaalid245/assigment-docker-js.git
  
- Docker Hub: `docker pull Khaalid245/task-manager`

## Build and Run Docker Image

### Install Docker (Ubuntu)

```bash
# Add Docker's GPG key
sudo apt-get update && sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker repository
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io

#Dockerfile



FROM nginx:alpine
COPY current_dir /usr/share/nginx/html
EXPOSE 80

#Build and Run Docker Image


docker build -t task-manager .
docker run -d -p 8080:80 task-manager

#Push Image to Docker Hub

    Create Docker Hub account: Docker Hub

    Login: docker login

    Push Image: docker push your-Khaalid245/task-manager