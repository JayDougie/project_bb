# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :project_bb,
  ecto_repos: [ProjectBb.Repo]

# Configures the endpoint
config :project_bb, ProjectBbWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "bIYXytO0G+e+cLWt8GrJgow/yT4QEs65/oN8x9D/YaVES9yEBZEtp1BPVtGjVQHl",
  render_errors: [view: ProjectBbWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: ProjectBb.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
