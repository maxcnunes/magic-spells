# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "raring32-mini"
  config.vm.box_url = "https://dl.dropboxusercontent.com/u/4387941/vagrant-boxes/ubuntu-13.04-mini-i386.box"
  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 9000, host: 9000

  config.vm.provision :chef_solo do |chef|
    chef.add_recipe "node-dev"
  end

  config.berkshelf.enabled = true
end
