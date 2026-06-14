import React, { useState } from 'react'
import { createAgent, executeAgent, deleteAgent, getAgentStatus } from '../services/api'

const AgentMode = ({ providers }) => {
  const [agents, setAgents] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    goal: '',
    provider: 'openai',
    model: 'gpt-3.5-turbo'
  })
  const [loading, setLoading] = useState(false)

  const handleCreateAgent = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.goal) return

    setLoading(true)
    try {
      const response = await createAgent(
        formData.name,
        formData.goal,
        formData.provider,
        formData.model
      )
      setAgents([...agents, response.data.agent])
      setFormData({ name: '', goal: '', provider: 'openai', model: 'gpt-3.5-turbo' })
      setShowCreateForm(false)
    } catch (error) {
      console.error('Error creating agent:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleExecuteAgent = async (agentId) => {
    try {
      const response = await executeAgent(agentId)
      const updatedAgents = agents.map(a => 
        a.id === agentId ? response.data.agent : a
      )
      setAgents(updatedAgents)
    } catch (error) {
      console.error('Error executing agent:', error)
    }
  }

  const handleDeleteAgent = async (agentId) => {
    try {
      await deleteAgent(agentId)
      setAgents(agents.filter(a => a.id !== agentId))
    } catch (error) {
      console.error('Error deleting agent:', error)
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Agent Mode</h3>

      {/* Create Agent Form */}
      {showCreateForm && (
        <div className="card mb-3" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="card-body">
            <form onSubmit={handleCreateAgent}>
              <div className="mb-3">
                <label className="form-label">Agent Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Data Analyzer"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Goal</label>
                <textarea
                  className="form-control"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  placeholder="Describe what the agent should do..."
                  rows="3"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Provider</label>
                  <select
                    className="form-select"
                    value={formData.provider}
                    onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                  >
                    {providers.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Model</label>
                  <select
                    className="form-select"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                  >
                    {formData.provider && providers.find(p => p.id === formData.provider)?.models?.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Agent'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!showCreateForm && (
        <button className="btn btn-primary mb-3" onClick={() => setShowCreateForm(true)}>
          + New Agent
        </button>
      )}

      {/* Active Agents */}
      <div>
        <h5>Active Agents ({agents.length})</h5>
        {agents.length === 0 ? (
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>No agents created yet</p>
        ) : (
          agents.map(agent => (
            <div key={agent.id} className="card mb-2" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h6>{agent.name}</h6>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'rgba(255,255,255,0.7)' }}>
                      {agent.goal}
                    </p>
                    <small style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Status: <span style={{ color: agent.status === 'executing' ? '#ffc107' : '#28a745' }}>
                        {agent.status}
                      </span>
                    </small>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="btn btn-sm btn-success"
                      onClick={() => handleExecuteAgent(agent.id)}
                      disabled={agent.status === 'executing'}
                    >
                      Execute
                    </button>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteAgent(agent.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default AgentMode
