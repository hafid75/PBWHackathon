# DevOps Infrastructure and Applications on AWS Kubernetes (EKS)

## Overview

This folder contains the infrastructure code and application deployment configurations for a set of services running on Amazon Elastic Kubernetes Service (EKS). Our setup leverages Kubernetes' orchestration capabilities to manage and scale our applications efficiently.

## Infrastructure

Our infrastructure is codified using Kubernetes YAML configuration files which define the desired state for our deployments, services, config maps, and secrets. We use namespaces to separate the environments, in our case, a `hackathonParis` namespace.

### Components

- **EKS Cluster**: The backbone of our system, running on AWS, managed through the AWS Management Console and `kubectl`.
- **Namespaces**: Logical partitions of the cluster to isolate the `hackathonParis` environment.
- **Deployments**: Kubernetes Deployments that ensure our applications are running and self-healing.
- **Services**: Internal services that enable communication between different components of our applications.
- **Ingress**: An Ingress controller is used for the front-end app to handle external HTTP traffic, external calls, etc.

## Applications

Our suite includes two main applications:

- **Server**: A backend service running Node.js. It handles the business logic and interacts with other services and databases.

- **Web-Server**: A front-end React application that provides the user interface. It's served over an Ingress controller to be accessible from the internet.

Both applications are containerized using Docker, with images built from the root of each app's directory using the provided `Dockerfile`.

### Server

- **Source Location**: `./server`
- **Docker Image**: `hackathonParis.registry.io/server:latest`
- **Port**: 3000

### Web-Server

- **Source Location**: `./web-server`
- **Docker Image**: `hackathonParis.registry.io/web-server:latest`
- **Port**: 3000
- **Ingress Host**: `app.hackathonParis.io`

## Getting Started

To start using this project, you need to have `kubectl` configured with access to your AWS EKS cluster. You should also have AWS CLI setup for any AWS-related commands.

### Prerequisites

- AWS CLI
- Docker
- kubectl

### Deployment

Use the following commands to deploy the applications to the `hackathonParis` namespace:

```bash
kubectl apply -f devOps/
